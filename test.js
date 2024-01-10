const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const multiples = require('./multiples.js');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

describe('validateInput', () => {
    it('should return true for valid inputs', (done) => {
        const isValid = multiples.validateInput('3 5');
        expect(isValid).to.be.true;
        done();
    })
    it('should return false for invalid inputs', (done) => {
        const isValid = multiples.validateInput('35 34 hello');
        expect(isValid).to.be.false;
        done();
    })
});

describe('logInfo', () => {
    beforeEach(function() {
        sinon.spy(console, 'log');
    })
    afterEach(function() {
        console.log.restore();
    })
    it('should return the correct value for 100, 1000', (done) => {
        multiples.logInfo(100, 1000);
        expect(console.log).to.be.called;
        expect(console.log.calledWith('Multiples of 100 1000')).to.be.true;
        done()
    })
    it('should return the correct value for 500, 1200', (done) => {
        multiples.logInfo(500, 1200);
        expect(console.log.calledOnce).to.be.true;
        expect(console.log.calledWith('Multiples of 500 1200')).to.be.true;
        done()
    })
})

describe('findSum', () => {
    beforeEach(function() {
        sinon.spy(console, 'log');
    })
    afterEach(function() {
        console.log.restore();
    })
    it('should return the correct value for 100, 1000', function(done) {
        this.timeout(6000);
        multiples.findSum(100, 1000);
        setTimeout(() => {
            expect(console.log.calledOnce).to.be.true;
            expect(console.log.calledWith(6500)).to.be.true;
            done();
        }, 5000);
    })
    it('should return the correct value for 500, 1200', function(done) {
        this.timeout(6000);
        multiples.findSum(500, 1200);
        setTimeout(() => {
            expect(console.log.calledOnce).to.be.true;
            expect(console.log.calledWith(1500)).to.be.true;
            done();
        }, 5000);
        
    })
});

describe('sumOfMultiples', () => {
    beforeEach(function() {
        sinon.spy(console, 'log');
    })
    afterEach(function() {
        console.log.restore();
    })
    it('should return the correct value for 100, 1000', function(done) {
        this.timeout(6000);
        multiples.sumOfMultiples('100 1000');
        setTimeout(() => {
            expect(console.log.calledTwice).to.be.true;
            expect(console.log.calledWith(6500)).to.be.true;
            done();
        }, 5000);
    })
    it('should return the correct value for 500, 1200', function(done) {
        this.timeout(6000);
        multiples.sumOfMultiples('500 1200');
        setTimeout(() => {
            expect(console.log.calledTwice).to.be.true;
            expect(console.log.calledWith(1500)).to.be.true;
            done();
        }, 5000);
    })
    it('should print a failure message for invalid inputs', function(done) {
        this.timeout(6000);
        multiples.sumOfMultiples('500 1200 hello');
        setTimeout(() => {
            expect(console.log.calledOnce).to.be.true;
            expect(console.log.calledWith('Input is invalid. Please make sure the input is a number followed by a space followed by a number.')).to.be.true;
            done();
        }, 3000);
    })
});

