const api_url = "http://127.0.0.1:5500/users.json"; 
    async function getapi(url) {
        try {
            const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Error fetching data: ' + response.statusText);
                }
                const data = await response.json(); 
                console.log('Fetched Data:', data); // Debugging log

                // Check if data is valid
                if (data && Array.isArray(data)) {
                    show(data);
                } else {
                    console.error('Invalid data format received');
                }

                hideloader();
            }catch (error) {
                console.error('Error:', error);
            }
        }

            const loadingElement = document.getElementById('loading');
            if (loadingElement) {
                loadingElement.style.display = 'none';
            }
        

       
        function show(data) {
            let tab = 
                `<tr>
                  <th>Name</th>
                  <th>Office</th>
                  <th>Position</th>
                  <th>Salary</th>
                 </tr>`;

            for (let r of data) {
                tab += `<tr> 
                            <td>${r.Name}</td> 
                            <td>${r.Office}</td>
                            <td>${r.Position}</td>
                            <td>${r.Salary}</td>
                        </tr>`;
            }

            document.getElementById("employees").innerHTML = tab;
        }

        window.onload = () => {
            getapi(api_url);
        };


