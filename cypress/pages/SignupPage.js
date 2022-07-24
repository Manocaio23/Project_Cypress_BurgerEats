
class SignupPage{

    //acessar a pagina onde tem o forumalario
    go(){
        //cy.viewport(1920,1080)
        cy.visit('/')
        
        cy.get('a[href="/deliver"]').click();
        cy.get('#page-deliver form h1').should('have.text','Cadastre-se para  fazer entregas')

    }

    fillForm(entregador){

        cy.get('input[placeholder="Nome completo"]').type(entregador.nome)
        cy.get('input[placeholder="CPF somente números"]').type(entregador.cpf)
        cy.get('input[placeholder="E-mail"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)

        cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
        cy.get('input[type=button][value="Buscar CEP"]').click();

        cy.get('input[name=address-number]').type(entregador.endereco.numero)
        cy.get('input[name=address-details]').type(entregador.endereco.complemento)

        cy.get('input[name="address"]').should('have.value',entregador.endereco.rua)
        cy.get('input[name=district]').should('have.value',entregador.endereco.bairro)
        cy.get('input[name=city-uf]').should('have.value',entregador.endereco.cidade_uf)

        cy.contains('.delivery-method li',entregador.metodo_entrega).click() //elemento tipo xpaht

        //upload - atachfile da biblioteca que estamos usando

        
       // cy.get('div[class="dropzone"] input[type="file"]').selectFile(entregador.cnh) 


    }

    submit(){
        cy.get('form button[type=submit]').click()
    }


    //modalCOntentSholdBe(expectedMenssage){
       // const expectedMenssage='Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

        //cy.get('.swal2-container div[class="swal2-html-container"]').
        //    should('have.text',expectedMenssage)
   // }


   //validação de mensagem
   alertMensagem(expectedMessage){
    //cy.get('.alert-error').should('have.text',expectedMessage)
    cy.contains('.alert-error',expectedMessage).should('be.visible')
   }


}




//exportanto a pagina para importala na camada de teste

export default new SignupPage;