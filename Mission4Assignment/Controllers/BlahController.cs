using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Mission4Assignment.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Mission4Assignment.Controllers
{
    public class BlahController : Controller {
        // GET: /<controller>/
        public IActionResult Index() {
            return View();
        }

        [HttpGet]
        public IActionResult gradeCalc() {
            return View();
        }

        [HttpPost]
        public IActionResult gradeCalc(gradeCalcModel model)
        {
            return View();
        }
    }
}

