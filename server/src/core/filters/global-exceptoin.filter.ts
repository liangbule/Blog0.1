import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
// import { ConfigService } from '../../config/config.service';
// import { ErrorCode } from '../../constants/error';
// import { LoggerService } from '../../common/logger.service';

@Catch(HttpException)
export class GlobalExceptionFilter implements ExceptionFilter<HttpException> {
    // constructor(
    //     private readonly configService: ConfigService,
    //     private readonly logger: LoggerService,
    // ) { }

    catch (exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception.getStatus()
        const nestjsMessage = exception.message;
        console.log(exception);
        const exceptionRes:any = exception.getResponse()
        const {error,message} = exceptionRes
        // NOTE: 权限不足跳转由前端判定
        response.status(status).json({
            status,
            timestamp: new Date().toISOString(),
            path: request.url,
            error,
            message,
        });
    }
}