using Microsoft.AspNetCore.Identity;
using MaranathaSanFélix.Constanst;
using System.Data;

namespace MaranathaSanFélix.Entity
{
    public class UserSeeder
    {
        public static async Task SeedUserAsync(IServiceProvider serviceProvider, 
                                                                string email, 
                                                                string password, 
                                                                string role)
        { 
           var userManager = serviceProvider.GetRequiredService<UserManager<IdentityUser>>();
            await CreateUserWithRole(userManager, email, password, role);
        }

        private static async Task CreateUserWithRole(UserManager<IdentityUser> userManager,
                                                string email,
                                                string password,
                                                string role)
        {
            if (await userManager.FindByEmailAsync(email) == null)
            {
                var user = new IdentityUser
                {
                    Email = email,
                    EmailConfirmed = true,
                    UserName = email,
                };

                var result = await userManager.CreateAsync(user, password);
                if (result.Succeeded)
                {
                    await userManager.AddToRoleAsync(user, role);
                }
                else
                {
                    // Mejoramos el manejo de errores para mostrar los mensajes detallados
                    var errors = string.Join(", ", result.Errors.Select(e => e.Description));
                    throw new Exception($"Error al crear Usuario con el email {user.Email}. Error: {errors}");
                }
            }
        }
    }
}
