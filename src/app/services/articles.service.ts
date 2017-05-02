import { Injectable } from '@angular/core';
import {tagged_word} from '../workspace/word.class'
import { Headers, Http , RequestOptions} from '@angular/http';


import 'rxjs/add/operator/toPromise';

@Injectable()
export class ArticlesService {

   constructor(private http: Http) { }
     
   listUrl = "http://127.0.0.1:5000/article/list"
   getUrl = "http://127.0.0.1:5000/article/get/"
   saveUrl = "http://127.0.0.1:5000/article/save"

    listArticles(): Promise<any>{
        return this.http.get(this.listUrl)
               .toPromise()
               .then(function(response){
                    return response.json();
               })
               .catch(this.handleError);
    }

    getArticle(id:number): any{
        return this.http.get(this.getUrl+id)
               .toPromise()
               .then(function(response){
                    console.log(response.json());
                    return response.json();
               })
               .catch(this.handleError);
    }

    //TODO: implement Save Article.
    saveArticle(id:number,sentences:any[]): any{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.saveUrl,{id:id, sentences:sentences}, options)
               .toPromise()
               .then(function(response){
                    console.log(response.json());
                    return response.json();
               })
               .catch(this.handleError);
    }

    handleError(){
        console.log("HTTP ERROR")
    }



}