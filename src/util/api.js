import { from } from 'rxjs';

export const api = {
  fetchUser: () => {
    const request = fetch(`https://randomuser.me/api/`).then(response =>
      response.json()
    );
    return from(request);
  },
};
