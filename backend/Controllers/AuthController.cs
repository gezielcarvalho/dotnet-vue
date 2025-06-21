using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginRequest req)
    {
        if (string.IsNullOrWhiteSpace(req.Username) || string.IsNullOrWhiteSpace(req.Password))
            return BadRequest(new { error = "Username and password required." });

        // Simulate JWT creation
        var fakeJwt = "fake-jwt-token";

        // Set cookie with HttpOnly, Secure, SameSite
        Response.Cookies.Append("jwt", fakeJwt, new CookieOptions
        {
            HttpOnly = true,
            Secure = true,
            SameSite = SameSiteMode.Strict,
            Path = "/"
        });

        return Ok(new { success = true });
    }
}

public class LoginRequest
{
    public string? Username { get; set; }
    public string? Password { get; set; }
}