const {LoginPage} = require('./LoginPage');
const {DashboardPage} = require('./DashboardPage');
const {OrdersHistoryPage} = require('./OrdersHistoryPage');
const {OrdersReviewPage} = require('./OrdersReviewPage');
const {CartPage} = require('./CartPage');
const{QFHomePage} = require('./QFHomePage');
const{QFAccountRegPage} = require('./QFAccountRegPage');
const{QFMyAccountPage} = require('./QFMyAccountPage');

class POManager
{
constructor(page)
{
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.dashboardPage = new DashboardPage(this.page);
    this.ordersHistoryPage = new OrdersHistoryPage(this.page);
    this.ordersReviewPage = new OrdersReviewPage(this.page);
    this.cartPage = new CartPage(this.page);
    this.qfHomePage = new QFHomePage(this.page);
    this.qfMyAccountPage = new QFMyAccountPage(this.page);
    this.qfAccountRegPage = new QFAccountRegPage(this.page);



}

getLoginPage()
{
    return this.loginPage;
}

getCartPage()
{
    return this.cartPage;
}

getDashboardPage()
{
    return this.dashboardPage;
}
getOrdersHistoryPage()
{
    return this.ordersHistoryPage;
}

getOrdersReviewPage()
{
    return this.ordersReviewPage;
}
getQFHomePage() {
    return this.qfHomePage;
}

getQFMyAccountPage() {
    return this.qfMyAccountPage;
}

getQFAccountRegPage() {
    return this.qfAccountRegPage;
}
}
module.exports = {POManager};