import * as firebase from 'firebase';
import { StaticInjector } from '@angular/core/src/di/injector';

export class AuthService {
    token: string;
    signupUser(email: string, password: string): void {
        firebase.auth().createUserWithEmailAndPassword( email, password)
            //  .then((response: Response) => console.log(response))
            .catch(error => console.log(error));
    }

    signinUser(email: string, password: string): void {
        firebase.auth().signInWithEmailAndPassword( email, password)
            .then((response: Response) => {
                firebase.auth().currentUser.getIdToken().then(
                    (tk: string) => this.token = tk
                );
            })
            .catch(error => console.log(error));
    }

    signoutUser() {
        firebase.auth().signOut();
        this.token = null;
    }

    getToken(): string {
        firebase.auth().currentUser.getIdToken().then(
            (tk: string) => this.token = tk
        );
        return this.token;
    }

    isAuthenticated(): boolean {
        return this.token != null;
    }
}
