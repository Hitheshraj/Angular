#Install json server

-npm install -d jason-server

#jason server verification

json-server --version

#Run json server on a data file

json-server --watch db.json

#access your api

  http://localhost:3000/employes

  post   http://localhost:3000/employes
        {
            {
            "first_name":"Brand",
            "last_name":"new",
            "email":"brandnew@example.com"
        }
        }
    