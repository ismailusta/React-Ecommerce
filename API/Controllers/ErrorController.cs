using Microsoft.AspNetCore.Mvc;


namespace API.Controllers;

public class ErrorController : ControllerBase
{
    [ApiController]
    [Route("/error")]
    public IActionResult Error() => Problem();
}