using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using MaranathaSanFélix.ViewModel;
using System.Threading.Tasks;
using MaranathaSanFélix.Constanst;

public class LoginController : Controller
{
    private readonly SignInManager<IdentityUser> _signInManager;
    private readonly UserManager<IdentityUser> _userManager;

    public LoginController(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager)
    {
        _userManager = userManager;
        _signInManager = signInManager;
    }

    // Acción para mostrar el formulario de inicio de sesión
    [HttpGet]
    public IActionResult Login()
    {
        return View();
    }

    // Acción para manejar el inicio de sesión
    [HttpPost]
    public async Task<IActionResult> Login(LoginViewModel model)
    {
        if (ModelState.IsValid)
        {
            var result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, isPersistent: false, lockoutOnFailure: false);

            if (result.Succeeded)
            {
                return RedirectToAction("Index", "Home");
            }

            ModelState.AddModelError(string.Empty, "Invalid login attempt.");
        }
        return View(model);
    }

    // Acción para mostrar el formulario de registro
    [HttpGet]
    public IActionResult Register()
    {
        return View();
    }

    // Acción para manejar el registro
    [HttpPost]
    public async Task<IActionResult> Register(RegisterViewModel model)
    {
        if (ModelState.IsValid)
        {
            var user = new IdentityUser { UserName = model.Email, Email = model.Email };
            var result = await _userManager.CreateAsync(user, model.Password);

            if (result.Succeeded)
            {
                await _userManager.AddToRoleAsync(user, Roles.Basic); // Asegúrate de que este rol existe.

                await _signInManager.SignInAsync(user, isPersistent: false);
                return RedirectToAction("Login", "Login");
            }

            foreach (var error in result.Errors)
            {
                ModelState.AddModelError(string.Empty, error.Description); // Agrega el error al modelo.
            }
        }
        return View(model);
    }
}
