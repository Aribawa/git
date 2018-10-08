using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GameFinalAPI.Controllers
{
    public class PageController : Controller
    {
        // GET: Page
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetPage()
        {
            return new FilePathResult("~/Views/Page/GetPage.html", "text/html");
        }

        public ActionResult PostPage()
        {
            return new FilePathResult("~/Views/Page/PostPage.html", "text/html");
        }

        public ActionResult PutDeletePage()
        {
            return new FilePathResult("~/Views/Page/PutDeletePage.html", "text/html");
        }

        public ActionResult ReactiveGet()
        {
            return new FilePathResult("~/Views/Page/ReactiveGet.html", "text/html");
        }

        public ActionResult Promise()
        {
            return new FilePathResult("~/Views/Page/Promise.html", "text/html");
        }


        public ActionResult GetJQuery()
        {
            return new FilePathResult("~/Views/Page/GetJQuery.html", "text/html");
        }

        public ActionResult PostJQuery()
        {
            return new FilePathResult("~/Views/Page/PostJQuery.html", "text/html");
        }

        public ActionResult PutDeleteJQuery()
        {
            return new FilePathResult("~/Views/Page/PutDeleteJQuery.html", "text/html");
        }


    }
}