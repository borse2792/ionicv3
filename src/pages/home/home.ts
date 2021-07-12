import { Component } from '@angular/core';
import { ActionSheetController, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  submitted: boolean = false;
  ionform: FormGroup;
  imageList: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,
    public formBuilder: FormBuilder, public actionSheetCtrl: ActionSheetController) {
    this.ionform = formBuilder.group({
      post_title: ['', Validators.required],
      post_description: ['', Validators.required],
    });
  }
  Save() {
    this.submitted = true;
    if (!this.ionform.valid) {
      return;
    }
    alert("Done");
    /*
   var params = "post_title=" + this.ionform.value.post_title +
     "&post_description=" + this.ionform.value.post_description;
  

   let headers = new Headers();
   headers.append('Content-Type', 'application/x-www-form-urlencoded');
   headers.append('Accept', 'application/json');
   headers.append('Authorization', 'Bearer {your token}');
   var headers = new Headers();
   headers.append('Content-Type', 'application/x-www-form-urlencoded');

   this.http.post("url", params, { headers: headers })
     .map(res => res.json())
     .subscribe(data => {


     }, error => {

     });*/
  }
  pickImages() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Option',
      buttons: [
        {
          text: 'Camera',
          icon: 'camera',
          handler: () => {
            /* const options: CameraOptions = {
               quality: 40,
               destinationType: this.camera.DestinationType.DATA_URL,
               encodingType: this.camera.EncodingType.JPEG,
               mediaType: this.camera.MediaType.PICTURE,
               correctOrientation: true,
               targetWidth: 500,
               targetHeight: 500
             }
             this.camera.getPicture(options).then((imageURI) => {
               console.log(imageURI);
               this.imageList.push({ image_file_name: imageURI, base64: true });
 
             }, (err) => {
 
               console.log(err);
             });*/
          }
        },
        {
          text: 'Gallery',
          icon: 'image',
          handler: () => {
            /*const options: CameraOptions = {
              quality: 40,
              sourceType: 0,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
              correctOrientation: true,
              targetWidth: 500,
              targetHeight: 500
            }
            //imageData
            this.camera.getPicture(options).then((imageURI) => {
              console.log(imageURI);
              this.imageList.push({ image_file_name: imageURI, base64: true });
              console.log(imageURI);
              //  });
            }, (err) => {
              // Handle error
              console.log(err);
            });*/
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'destructive',
          handler: () => {
            console.log('the user has cancelled the interaction.');
          }
        }
      ]
    });
    actionSheet.present();
  }
  /*{
  getFavorite(): Promise<string> {
    return this.storage.get('Bookmark').then((value) => {
      return value;
    });
  };


  user_login(data: any) {
    this.storage.set('user_data', data);
    this.events.publish('user:login', data);
  }
  }*/
}
