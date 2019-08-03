import { NewsModel } from "../models/NewsModel";

export class Convert {

    static toArticleModel = (wordpressModel) => {

        return new NewsModel(
            wordpressModel.wordpress_id,
            wordpressModel.slug,
            wordpressModel.acf.en,
            wordpressModel.acf.de,
            wordpressModel.acf.experience,
            wordpressModel.acf.related_articles
            )
    }

    static toArticleModelArray = (wordpressQuery) => {
        const articleArray = [];
        wordpressQuery.edges.map(wordpressArticle => {
            let article = this.toArticleModel(wordpressArticle.node);
            articleArray.push(article);
        });
        return articleArray;
    }
}