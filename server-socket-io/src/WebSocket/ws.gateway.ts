import {
    OnGatewayConnection,
    OnGatewayDisconnect,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    WsResponse
} from '@nestjs/websockets';
import { Server } from 'ws';

@WebSocketGateway(8080)
export class WsGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server: Server;

    @SubscribeMessage('events')
    onEvent(client: any, data: any): WsResponse<unknown> {
        const event = 'events';
        return { event, data };
    }

    handleConnection(client: any, ...args: any[]): any {
        console.log('New connecting client:', client);
    }

    handleDisconnect(client: any): any {
        console.log('Client Disconnected:', client);
    }
}
