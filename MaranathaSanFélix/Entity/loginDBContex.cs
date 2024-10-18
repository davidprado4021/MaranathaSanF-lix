using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
namespace MaranathaSanFélix.Entity
{
    public class loginDBContex:IdentityDbContext
    {
        public loginDBContex(DbContextOptions<loginDBContex> options)
            :base(options)
        {
            
        }
    }
}
