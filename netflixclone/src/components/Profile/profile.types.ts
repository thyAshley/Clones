import Firebase from "firebase";

export interface ProfileComposition {
  Title: React.FC;
  User: React.FC;
  List: React.FC;
  Picture: React.FC<{
    src: string | null;
  }>;
  Name: React.FC;
}

export interface ProfileAttributes {
  user: Firebase.User | null;
}
