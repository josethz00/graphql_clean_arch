import mongoose from 'mongoose';


class MongoAdapter {

  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  public connect(): void{
    mongoose.connect(
      this.url,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
  }

}

export { MongoAdapter };
