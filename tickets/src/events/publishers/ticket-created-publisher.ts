import {Publisher, Subjects, TicketCreatedEvent} from '@hdevtickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    readonly subject = Subjects.TicketCreated;
}
