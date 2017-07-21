class Constructors {
    handle(source, name, args) {
        if( !this.hasOwnProperty(name) ) {
            this[name] = sinon.stub();
        }
        
        this[name].apply(source, args);
    }
}

var constructors = new Constructors();

export default constructors;
