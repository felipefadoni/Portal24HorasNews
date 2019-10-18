import React, { PureComponent } from 'react';

class ComoAnunciar extends PureComponent {

    componentDidMount() {
        document.title = "Como Anunciar | 24 Horas News";
    }
    
    render() {
        return(
            <div className="container">
                <div className="row mb-5">
                    <div className="col-12">
                        <h1>Como Anunciar?</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque tempor hendrerit. Suspendisse elementum ipsum in fringilla ultricies. Donec fringilla id dui in gravida. Aenean vestibulum, libero sed consectetur vestibulum, sapien est mollis enim, vel viverra nunc justo ut sapien. Sed maximus convallis lorem, sed aliquet ex suscipit eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec mollis mi id semper fringilla. Maecenas in ex rhoncus, ultricies elit et, ultrices mauris. Suspendisse eget lorem a felis viverra consequat quis et arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas vel mollis purus, a auctor tortor. Aliquam tristique commodo luctus. Phasellus ut porta dolor.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque tempor hendrerit. Suspendisse elementum ipsum in fringilla ultricies. Donec fringilla id dui in gravida. Aenean vestibulum, libero sed consectetur vestibulum, sapien est mollis enim, vel viverra nunc justo ut sapien. Sed maximus convallis lorem, sed aliquet ex suscipit eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec mollis mi id semper fringilla. Maecenas in ex rhoncus, ultricies elit et, ultrices mauris. Suspendisse eget lorem a felis viverra consequat quis et arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas vel mollis purus, a auctor tortor. Aliquam tristique commodo luctus. Phasellus ut porta dolor.</p>
                    </div>
                </div>
            </div>
        );
    }

}

export default ComoAnunciar;