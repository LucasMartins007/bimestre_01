import React, { Fragment, useEffect, useState } from 'react';
import ItemComponent from '../itemComponent/ItemComponent';


const ListComponent = () => {

    const [repos, setRepos] = useState();

    useEffect(() => {
        fetch("https://api.github.com/orgs/rocketseat/repos")
            .then((res) => res.json())
            .then((data) => setRepos(data));
    }, []);

    return <Fragment>
        <div style={{ paddingLeft: '40px', paddingTop: '20px' }}>
            <label>
                <b style={{ fontSize: '30px' }}>Lista de Repositórios</b>
            </label>
            {repos?.map((item) => (
                <ItemComponent name={item.name} description={item.description} html_url={item.html_url} />
            ))}
        </div>
    </Fragment>
}

export default ListComponent;