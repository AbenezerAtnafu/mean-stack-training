export interface Course {
  title: string;
  isPaid: boolean;
}

export class HomeService {
  getCoursesList() {
    return [
      {
        title: 'Angular',
        isPaid: true,
      },
      {
        title: 'Node.JS',
        isPaid: false,
      },
      {
        title: 'Express.JS',
        isPaid: true,
      },
    ];
  }
}
