module.exports = function ({ types: t }) {
    return {
        visitor: {
            Program(path) {
                
                const identifier = t.identifier("constructorStubs");
                const importDefaultSpecifier = t.importDefaultSpecifier(identifier);
                const importDeclaration = t.importDeclaration([importDefaultSpecifier], t.stringLiteral("constructorStubs"));
                path.unshiftContainer("body", importDeclaration);
            },
            Class(path) {
                const { node } = path;

                let className = path.node.id.name;
                if( className.indexOf("ConstructorStubs") >= 0 ) return;

                var methods = path.node.body.body;
                path.node.body.body.forEach((content) => {
                    if (content.key.name == "constructor") {
                        if (content._constructorStubSet) return;

                        content._constructorStubSet = true;
                        var constructorStubName = className;
                        var constructorStubs = "constructorStubs";

                        content.body.body.push(
                            t.expressionStatement(
                                t.CallExpression(
                                    t.MemberExpression(
                                        t.identifier(constructorStubs),
                                        t.identifier("handle")
                                    ),
                                    [
                                        t.thisExpression(),
                                        t.stringLiteral(className),
                                        t.identifier("arguments")
                                    ]
                                )
                            )
                        );
                    }
                });
            }
        }
    }
};