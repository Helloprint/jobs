export default class Service {
    private static db;
    static getContents(): Promise<{}>;
    static getJobsContents(): Promise<{}>;
    static getExtraJobs(): Promise<{}>;
}
export interface IContentful {
    sys: {
        space: {
            sys: {
                type: "Link";
                linkType: "Space";
                id: "aehdfydpw3mg";
            };
        };
        id: "Jl9VN84V2wWUEycWOOSmS";
        type: "Entry";
        createdAt: string;
        updatedAt: string;
        revision: 1;
        contentType: {
            sys: {
                type: "Link";
                linkType: "ContentType";
                id: "aboutContents";
            };
        };
        locale: "en-US";
    };
    fields: {
        title: string;
        subtitle: string;
        body: string;
        poster: {
            sys: {
                type: "Link";
                linkType: "Asset";
                id: string;
            };
        };
        more: string;
        morePhoto: {
            sys: {
                type: "Link";
                linkType: "Asset";
                id: string;
            };
        };
    };
}
