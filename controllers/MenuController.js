class MenuController
{
    contactUs=(req, res)=>
    {
        return res.render('contact-us')
    }
    help=(req, res)=>
    {
        return res.render('help')
    }
    faqs=(req, res)=>
    {
        return res.render('faqs')
    }
}

module.exports=MenuController;