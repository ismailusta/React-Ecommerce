using Microsoft.AspNetCore.Mvc;


namespace API.Controllers;

[ApiController]
[Route("/error")]
public class ErrorController : ControllerBase
{
    [HttpGet("not-found")]
    public IActionResult NotFoundError()
    {
        return NotFound();
    }
    [HttpGet("bad-request")]
    public IActionResult BadRequestError()
    {
        return BadRequest();
    }
    [HttpGet("server-error")]
    public IActionResult InternalServerError()
    {
        throw new Exception("This is a server error for testing purposes.");
    }
    [HttpGet("unauthorized")]
    public IActionResult UnauthorizedError()
    {
        return Unauthorized();
    }
    [HttpGet("validation-error")]
    public IActionResult ValidationError()
    {
        ModelState.AddModelError("Validation", "Invalid data provided.");
        ModelState.AddModelError("Details", "Please check the input data.");
        return ValidationProblem();
    }
}