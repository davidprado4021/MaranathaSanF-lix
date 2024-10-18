using MaranathaSanFélix.Constanst;
using MaranathaSanFélix.Entity;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
//Add SQL EF Connection 
builder.Services.AddDbContext<loginDBContex>(options => {
    options.UseSqlServer(builder.Configuration.GetConnectionString("SqlConn"));
});

//Add Default Roles Manager
builder.Services.AddDefaultIdentity<IdentityUser>()
                                   .AddRoles<IdentityRole>()
                                   .AddEntityFrameworkStores<loginDBContex>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

using (var scope = app.Services.CreateScope()) { 
    var services= scope.ServiceProvider;

    RoleSeeder.SeedRolesAsync(services).Wait();
    UserSeeder.SeedUserAsync(services, "david@pr.com", "Davidprado4021!", Roles.ADMIN).Wait();  
}
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseDeveloperExceptionPage();
app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
