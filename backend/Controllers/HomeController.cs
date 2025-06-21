using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class HomeController : ControllerBase
{
    [HttpGet("health")]
    public IActionResult Health()
    {
        var response = new HealthCheckResponse(
            "Service is healthy",
            DateTime.UtcNow,
            Guid.NewGuid().ToString("N")
        );
        return Ok(response);
    }
}

public record HealthCheckResponse(string Message, DateTime Timestamp, string InstanceId);