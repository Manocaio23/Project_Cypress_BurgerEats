/// <reference types="cypress"/>
import signup from '../pages/SignupPage'
import SignupFactory from '../factories/SignupFactory'



describe('Cadastro', () => {

  //  beforeEach(function() {
     //   cy.fixture('deliver').then((d)=>{
     //       this.deliver=d
      //  })
    //});

   /* before(() => {
        cy.log('Executando uma unica vez ANTES de TODES CASOS DE TESTE')
    });

    beforeEach(() => {
        cy.log('Tudo aqui é executado sempre ANTES DE CADA CASO DE TESTE')
    });

    afterEach(() => {
        cy.log('Tudo aqui é executado sempre DEPOIS DE CADA CASO DE TESTE')
    });

    after(() => {
        cy.log('Executando tudo unica vez depois de todes os testes')
    });*/


    it('O Usuário  deve ser tornar um entregador', function() {
        var deliver = SignupFactory.deliver()
        signup.go()
        signup.fillForm(deliver)
        signup.submit()
       // const expectedMenssage='Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
       // signup.modalCOntentSholdBe(expectedMenssage)
    });

 //cenario incorreto
    it('Teste do CPF incorreto', function()  {

        var deliver = SignupFactory.deliver()

        deliver.cpf='0000a0000'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        //validação 
       signup.alertMensagem('Oops! CPF inválido') 
    });

    it('Teste do Email incorreto', function()  {
        var deliver = SignupFactory.deliver()

        deliver.email='teste.hotamil.com'
        
        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        //validação 
       signup.alertMensagem('Oops! Email com formato inválido.') 
    });

    // aqui cirarmos um teste dinamico para errar e continuar testando caso um der errado
    context('Campos Obrigatórios',function(){
        const messages=[//array imutaveis
                {field:'nome', output: 'É necessário informar o nome'},
                {field:'cpf', output: 'É necessário informar o CPF'},
                {field:'email', output: 'É necessário informar o email'},
                {field:'cep', output: 'É necessário informar o CEP'},
                {field:'numero', output: 'É necessário informar o número do endereço'},
                {field:'delivery_metod', output: 'Selecione o método de entrega'},
                {field:'cnh', output: 'Adicione uma foto da sua CNH'}
        ]



    before(function() {
        signup.go()//funcções do page
        signup.submit()
    })

    messages.forEach(function(msg){
        it(`${msg.field} Campos obrigatórios`, function() {
            signup.alertMensagem(msg.output)
        });
    

})

    
    })


  /*  it('Campos Obrigatórios', function() {
        signup.go()//funcções do page
        signup.submit()

        signup.alertMensagem('É necessário informar o nome')//validação
        signup.alertMensagem('É necessário informar o CPF')
        signup.alertMensagem('É necessário informar o email')
        signup.alertMensagem('É necessário informar o CEP')
        signup.alertMensagem('É necessário informar o número do endereço')
        signup.alertMensagem('Selecione o método de entrega')
        signup.alertMensagem('Adicione uma foto da sua CNH')
    });*/
});
    