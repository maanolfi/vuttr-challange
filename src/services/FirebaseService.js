import { firebaseDatabase } from '../config/firebase';

export default class FirebaseService {
  static getDataList = (nodePath, callback, size = 10) => {
    const query = firebaseDatabase
      .ref(nodePath)
      .orderByChild('title')
      .equalTo('Noti');

    query.on('value', dataSnapshot => {
      const items = [];
      dataSnapshot.forEach(childSnapshot => {
        const item = childSnapshot.val();
        item.key = childSnapshot.key;
        items.push(item);
      });
      callback(items);
    });

    return query;
  };
}
