var builder = WebApplication.CreateBuilder(args);

// Add CORS policy
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("http://localhost:9000")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

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

app.UseHttpsRedirection();

app.MapGet("/health", () =>
{
    var response = new HealthCheckResponse
    (
        "Service is healthy",
        DateTime.UtcNow,
        Guid.NewGuid().ToString("N")
    );
    return response;
})
.WithName("HealthCheck")
.WithOpenApi();

app.Run();

record HealthCheckResponse(string Message, DateTime Timestamp, string InstanceId);
