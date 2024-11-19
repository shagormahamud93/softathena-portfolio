import React from 'react';
type TBreadcrumbProps = {
    elementTitle: string;
}
const ElementsBreadcrumb = ({ elementTitle }: TBreadcrumbProps) => {
    return (
        <>
            <section className="section-space-medium">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <h2 className="elements__heading-title">{elementTitle}</h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ElementsBreadcrumb;