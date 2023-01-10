"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Express Swagger Generator
//import ExpressSwaggerGenerator from 'express-swagger-producer';
/* EXPRESS SWAGGER OPTIONS */
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            description: 'This is a sample server',
            title: 'Swagger',
            version: '1.0.0'
        },
        swagger: '2.0',
        //openapi: '3.0.0',
        host: 'localhost',
        basePath: '/api',
        produces: [
            "application/json"
        ],
        schemes: ['http', 'https'],
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                scheme: 'bearer',
                bearerFormat: 'JWT',
                name: 'Authorization',
                description: ''
            }
        },
        security: [
            {
                JWT: []
            }
        ]
    },
    basedir: __dirname,
    files: ['../../routes/**/*.ts', '../../services/**/*.ts'] //Path to the API handle folder
};
//SWAGGER DATA LOAD ENABLER MIDDLEWARE FOR BROWSER
/* EXPRESS SWAGGER CONFIGURATION */
const SwaggerDocsCreator = (app) => {
    //const ExpressSwagger = ExpressSwaggerGenerator(app);
    //EnableSwaggerOnBrowser(app);
    //ExpressSwagger(swaggerOptions);
};
exports.default = SwaggerDocsCreator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3dhZ2dlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taWRkbGV3YXJlcy9Td2FnZ2VyL2luZGV4LnN3YWdnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwyQkFBMkI7QUFDM0IsaUVBQWlFO0FBRWpFLDZCQUE2QjtBQUM3QixNQUFNLGNBQWMsR0FBVztJQUMzQixpQkFBaUIsRUFBRTtRQUNmLElBQUksRUFBRTtZQUNGLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsS0FBSyxFQUFFLFNBQVM7WUFDaEIsT0FBTyxFQUFFLE9BQU87U0FDbkI7UUFDRCxPQUFPLEVBQUUsS0FBSztRQUNkLG1CQUFtQjtRQUNuQixJQUFJLEVBQUUsV0FBVztRQUNqQixRQUFRLEVBQUUsTUFBTTtRQUNoQixRQUFRLEVBQUU7WUFDTixrQkFBa0I7U0FDckI7UUFDRCxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDO1FBQzFCLG1CQUFtQixFQUFFO1lBQ2pCLEdBQUcsRUFBRTtnQkFDRCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxNQUFNLEVBQUUsUUFBUTtnQkFDaEIsWUFBWSxFQUFFLEtBQUs7Z0JBQ25CLElBQUksRUFBRSxlQUFlO2dCQUNyQixXQUFXLEVBQUUsRUFBRTthQUNsQjtTQUNKO1FBQ0QsUUFBUSxFQUFFO1lBQ047Z0JBQ0ksR0FBRyxFQUFFLEVBQUU7YUFDVjtTQUNKO0tBQ0o7SUFDRCxPQUFPLEVBQUUsU0FBUztJQUNsQixLQUFLLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDLCtCQUErQjtDQUM1RixDQUFDO0FBR0Ysa0RBQWtEO0FBR2xELG1DQUFtQztBQUNuQyxNQUFNLGtCQUFrQixHQUFHLENBQUMsR0FBWSxFQUFFLEVBQUU7SUFDeEMsc0RBQXNEO0lBQ3RELDhCQUE4QjtJQUM5QixpQ0FBaUM7QUFDckMsQ0FBQyxDQUFBO0FBRUQsa0JBQWUsa0JBQWtCLENBQUMifQ==