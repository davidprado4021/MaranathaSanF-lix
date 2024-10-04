using Microsoft.AspNetCore.Mvc;

namespace MaranathaSanFelixWeb.Controllers
{
    public class LoginController : Controller
    {
        public IActionResult Login()
        {
            return View();
        }
    }
}