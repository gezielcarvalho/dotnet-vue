var builder = WebApplication.CreateBuilder(args);

// Configure Kestrel to bind to all interfaces in Docker
builder.WebHost.UseUrls("http://0.0.0.0:5084");

// Add CORS policy
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("http://localhost:9000", "http://localhost:3000", "http://frontend:3000")
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials(); // Important for cookies
    });
});

// Add controllers support
builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Use CORS
app.UseCors();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Remove HTTPS redirection for Docker
// app.UseHttpsRedirection();

// Map controllers
app.MapControllers();

app.Run();
