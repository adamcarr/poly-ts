interface IRedditContent {
    kind?: string;
    data?: {
        domain?: string;
        banned_by?: string;
        media_embed?: any;
        subreddit?: string;
        selftext_html?: string;
        selftext?: string;
        likes?: number;
        suggested_sort?: string;
        user_reports?: any;
        secure_media?: any;
        link_flair_text?: string;
        id?: string;
        from_kind?: string;
        gilded?: number;
        archived?: boolean;
        clicked?: boolean;
        report_reasons?: any;
        author?: string;
        media?: any;
        score?: number;
        approved_by?: string;
        over_18?: boolean;
        hidden?: boolean;
        preview?: {
            images?:
            {
                source?: {
                    url?: string;
                    width?: number;
                    height?: number;
                };
                variants?: any;
                id?: string;
            }[];
        };
        num_comments?: number;
        thumbnail?: string;
        subreddit_id?: string;
        edited?: boolean;
        link_flair_css_class?: string;
        author_flair_css_class?: string;
        downs?: number;
        secure_media_embed?: any;
        saved?: boolean;
        removal_reason?: string;
        post_hint?: string;
        stickied?: boolean;
        from?: string;
        is_self?: boolean;
        from_id?: string;
        permalink?: string;
        name?: string;
        created?: Date;
        url?: string;
        author_flair_text?: string;
        title?: string;
        created_utc?: Date;
        distinguished?: any;
        mod_reports?: any;
        visited?: boolean;
        num_reports?: any;
        ups?: number;
    };
}

export = IRedditContent;
