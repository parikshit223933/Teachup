class HomeController
{
    homePage=(req, res)=>
    {
        return res.render('home')
    }
}

module.exports=HomeController;