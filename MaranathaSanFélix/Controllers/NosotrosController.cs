using Microsoft.AspNetCore.Mvc;

namespace MaranathaSanFelixWeb.Controllers
{
    public class NosotrosController : Controller
    {
        public IActionResult Nosotros()
        {
            return View();
        }
    }
}