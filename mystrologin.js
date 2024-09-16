class loginMystro
{

    phonenum="#phone"
    txtPassword="#password"
    btnSubmit='[data-testid="authSignInSubmit"]'
    lblmsg="svg[viewBox='0 0 140 33']"

    setUserName(num)
    {
        cy.get(this.phonenum).type(num)

    }
    setPassword(password)
    {
        cy.get(this.txtPassword).type(password)

    }
    clickSubmit()
    {
        cy.get(this.btnSubmit).click()
    }
    verifyLogin()
    {
        cy.get(this.lblmsg).should('be.visible')
    }
}
export default loginMystro;