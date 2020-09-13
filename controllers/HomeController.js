class HomeController
{
    homePage=(req, res)=>
    {
        return res.json({wer:1})
    }
}

module.exports=HomeController;