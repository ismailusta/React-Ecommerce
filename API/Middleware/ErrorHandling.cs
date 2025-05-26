
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting.Internal;

namespace API.Middleware;

public class ErrorHandling
{
    private readonly RequestDelegate _next;
    private readonly ILogger<ErrorHandling> _logger;
    private readonly IHostEnvironment _env;
    public ErrorHandling(
        RequestDelegate next,
        ILogger<ErrorHandling> logger,
        IHostEnvironment env)
    {
        _next = next;
        _logger = logger;
        _env = env;
    }
    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, ex.Message);
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = 500;

            var response = new ProblemDetails
            {
                Status = 500,
                Detail = _env.IsDevelopment() ? ex.StackTrace?.ToString() : null,
                Title = ex.Message
            };
            var options = new JsonSerializerOptions
            {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
            };
            var json = JsonSerializer.Serialize(response, options);
            await context.Response.WriteAsync(json);
        }
    }
}
