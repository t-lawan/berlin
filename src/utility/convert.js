import { NewsModel } from "../models/NewsModel";

export class Convert {

    static toNewsModel = (wordpressModel) => {

        return new NewsModel(
            wordpressModel.wordpress_id,
            wordpressModel.slug,
            wordpressModel.acf.en,
            wordpressModel.acf.de,
            wordpressModel.acf.experience,
            wordpressModel.acf.related_articles
            )
    }

    static toNewsModelArray = (wordpressQuery) => {
        const articleArray = [];
        wordpressQuery.edges.map(wordpressArticle => {
            let article = this.toArticleModel(wordpressArticle.node);
            articleArray.push(article);
        });
        return articleArray;
    }


}