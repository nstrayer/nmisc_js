function linspace(a,b,length = 100){
                var dist = b - a,
                    int_length = dist/length;

                return [...Array(length).keys()].map( i => a + i*int_length)
            }
