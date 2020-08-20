
/// <reference types="cypress" />

import * as billHelpers from '../helpers/billHelper'


const LOGIN_URL = 'http://localhost:3000/api/login'

describe('testing auth', function () {
    it('test case 1 - Create a new Random Bill (GET & POST)', function () {
        billHelpers.createBillRequest(cy)
    })

    it('test case 2 - Create & Get all bills (GET & POST)', function(){
        billHelpers.createBillRequest(cy)
    })

    it('test case 3 - Creatre a Bill & delete it (GET, POST & DELETE)', function(){
        billHelpers.createBillRequestAndDelete(cy)
    })

    // it('test case 4 - Edit first Bill (PUT)', function(){
    //     billHelpers.editBillRequest(cy)
    // })

    

}) 