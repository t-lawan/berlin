import { NewsModel } from "../models/NewsModel";
import { EventsModel } from "../models/EventsModel";

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

    static toEventModel = (wordpressModel) => {
        return new EventsModel(
            wordpressModel.id,
            wordpressModel.slug,
            wordpressModel.acf.exp_number,
            wordpressModel.acf.EN,
            wordpressModel.acf.DE,
            wordpressModel.acf.start_date,
            wordpressModel.acf.start_time,
            wordpressModel.acf.end_date,
            "Venue",
            wordpressModel.acf.event_documentation,
            wordpressModel.acf.event_is_free,
            wordpressModel.acf.event_language,
            wordpressModel.acf.event_limited_capacity,
            wordpressModel.acf.thumbnail_image,
            wordpressModel.acf.participants,
            wordpressModel.acf.related_resources,
            wordpressModel.acf.other_event_language
        )
    }

    static toModelArray = (wordpressQuery, modelConverter) => {
        const modelArray = [];
        wordpressQuery.edges.map(wordpressModel => {
            let model = modelConverter(wordpressModel.node);
            modelArray.push(model);
        });
        return modelArray;
    }

    static eventsToCalendarModel = () => {
        
    }


}