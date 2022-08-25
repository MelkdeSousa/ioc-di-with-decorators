import Application from './application'
import { container } from './di/container'
import CommonLogger from './log/commom-logger'

container.register({token: 'logger', useClass: CommonLogger})

const app = container.resolve<Application>(Application)

app.server()
