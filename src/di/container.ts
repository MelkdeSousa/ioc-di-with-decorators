import 'reflect-metadata'

interface IContainerProvider {
    token: string;
    useClass: Function
}

export default class Container {
    private static instance: Container
    private providers: { [key: string]: any; } = {}

    static getInstance(): Container {
        if (!Container.instance) {
            Container.instance = new Container()
        }

        return Container.instance
    }

    public resolve<T>(targetClass: any): T {
        const hasDependecies = Reflect.getMetadata('injectionTokens', targetClass)

        const tokens = hasDependecies && Object.values(hasDependecies) || []
        
        const injections = tokens.map((token: string) => {
            const provider = this.providers[token]

            if (provider.prototype) return container.resolve(provider)

            return provider
        })

        this.providers[targetClass.name] = new targetClass(...injections)

        return this.providers[targetClass.name]
    }

    public register({ token, useClass }: IContainerProvider) {
        this.providers[token] = useClass
    }
}

export const container = Container.getInstance()
