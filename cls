[33mcommit feb653b9aa3db7f66f974f96862b0b308ccd16c2[m[33m ([m[1;36mHEAD[m[33m -> [m[1;32mmain[m[33m)[m
Author: Abhiram <abhiram092004@gmail.com>
Date:   Sun Oct 26 16:57:01 2025 +0530

    same thing

[33mcommit 6c169ce4648a3dc3e31ef73dcafa380bcea021d7[m[33m ([m[1;31morigin/main[m[33m, [m[1;31morigin/HEAD[m[33m)[m
Author: Abhiram <abhiram092004@gmail.com>
Date:   Sun Oct 26 16:47:49 2025 +0530

    same thing mark btn

[33mcommit e50fdf25454cab695391a239783442fa4a3424d7[m
Author: Abhiram <abhiram092004@gmail.com>
Date:   Sun Oct 26 16:36:26 2025 +0530

    same thing btn
    mark

[33mcommit 2aba0d1747e5e2367b39d89058e39cedce765cf2[m
Author: Abhiram <abhiram092004@gmail.com>
Date:   Sun Oct 26 16:21:58 2025 +0530

    making mark btn always appear

[33mcommit 5b740915db5a3a2a001c5a4e8cc34f43663b4012[m
Author: Abhiram <abhiram092004@gmail.com>
Date:   Sun Oct 26 16:09:42 2025 +0530

    mark button always appears

[33mcommit 3ccca0cbead08c40bbab0e3ed1755cfd38bba583[m
Author: Abhiram <abhiram092004@gmail.com>
Date:   Sun Oct 26 15:55:44 2025 +0530

    trying solve errors

[33mcommit aa865938294955660ca11e62de8325c99d738d69[m
Author: Abhiram <abhiram092004@gmail.com>
Date:   Sun Oct 26 15:17:22 2025 +0530

    Fix points not adding: remove duplicate API_URL, add logging

[33mcommit f6a8893f5dd20ee981e9f4e5d150d2b65d988503[m
Merge: 18edaae 4d06777
Author: Abhiram <abhiram092004@gmail.com>
Date:   Sat Oct 25 21:12:28 2025 +0530

    trying solve errors

[33mcommit 18edaae7f0613e2ac22810510f3c7cf895ab2ecb[m
Author: Abhiram <abhiram092004@gmail.com>
Date:   Sat Oct 25 21:11:03 2025 +0530

    Fix CORS configuration for registration

[33mcommit 4d06777f90c8c4f4ac434bcdfac1c70bfb13d1c1[m
Author: Abhiram Chidaraboyina <abhiram2820049@gmail.com>
Date:   Sat Oct 25 20:58:11 2025 +0530

    Fix: Remove Git merge conflict markers in AuthContext.js
    
    Removed API_URL constant and axios default configuration from AuthContext.

[33mcommit 9d72786fb6f9a70097abb528bd3da3d0be4ecd63[m
Merge: 988b728 2fc1a65
Author: Abhiram <abhiram092004@gmail.com>
Date:   Sat Oct 25 20:51:19 2025 +0530

    Merge remote changes

[33mcommit 988b7282d1394f5e0e98f6941595fd88d3f49697[m
Author: Abhiram <abhiram092004@gmail.com>
Date:   Sat Oct 25 20:49:20 2025 +0530

    trying solve errors

[33mcommit 2fc1a650720f07adfa88392a46f01c3f9642b056[m
Author: Abhiram Chidaraboyina <abhiram2820049@gmail.com>
Date:   Sat Oct 25 20:12:53 2025 +0530

    Fix useEffect dependency warning in AuthContext.js
    
    Move API_URL constant outside the AuthProvider component to module level. This resolves the React Hook exhaustive-deps warning since module-level constants don't need to be in the dependency array.

[33mcommit ded2ddd8639e2fe82e494b1d09ec66e312c104fb[m
Author: Abhiram <abhiram092004@gmail.com>
Date:   Sat Oct 25 20:08:28 2025 +0530

    Kept only ONE cors() middleware with all allowed origin

[33mcommit 9e623fa204f8c8689d076b547d79bf3ab8bbf06b[m
Author: Abhiram Chidaraboyina <abhiram2820049@gmail.com>
Date:   Sat Oct 25 20:06:03 2025 +0530

    Fix useEffect dependency warning in Home.js
    
    Move fetchExperiments function inside useEffect to resolve the React Hook exhaustive-deps warning. This prevents the need to add the function to the dependency array and avoids potential infinite re-render issues.

[33mcommit eaae5468ee165dcfdf5abca1d1267534e1f43a42[m
Author: Abhiram Chidaraboyina <abhiram2820049@gmail.com>
Date:   Sat Oct 25 20:01:49 2025 +0530

    Fix React warnings in Profile.js
    
    - Remove unused 'user' variable from useAuth destructuring
    - Fix missing dependency warning by ensuring useEffect dependencies are correct
    - Clean up code formatting

[33mcommit 02a43f374261f388c2facf223b763e940b200635[m
Author: Abhiram <abhiram092004@gmail.com>
Date:   Sat Oct 25 19:58:05 2025 +0530

    added https

[33mcommit 20d185735d53a0853c97be0efbd744421df24518[m
Author: Abhiram <abhiram092004@gmail.com>
Date:   Fri Oct 24 21:07:20 2025 +0530

    Fix: Allow all origins in CORS

[33mcommit 9058cb11a1dd2ebf585f0f215c8a26eecc9d0bc8[m
Author: Abhiram <abhiram092004@gmail.com>
Date:   Fri Oct 24 20:59:59 2025 +0530

    Fix: Update CORS to allow Vercel domain

[33mcommit 16f9f0c3f02236d8de0e016bcc9707ca96cf1c07[m
Author: Abhiram <abhiram092004@gmail.com>
Date:   Fri Oct 24 20:54:52 2025 +0530

    Fix: Update CORS to allow Vercel domain

[33mcommit db3f130b840fd85e82b1f72bf4afa1125bce2663[m
Author: Abhiram <abhiram092004@gmail.com>
Date:   Fri Oct 24 20:46:59 2025 +0530

    add some routes

[33mcommit 97fc8ded9ac45e874b8656ff18e8218ed888877b[m
Merge: 0177a34 32d701c
Author: Abhiram <abhiram092004@gmail.com>
Date:   Fri Oct 24 20:26:11 2025 +0530

    Fix: Change API_BASE_URL to API_URL in api.js

[33mcommit 0177a34eb54abbceee90dd9166f1c1595f34c898[m
Author: Abhiram <abhiram092004@gmail.com>
Date:   Fri Oct 24 20:09:50 2025 +0530

    changed DB user and pasaword

[33mcommit 32d701c03b1d0bdbb7d3051e6773384e3dac400f[m
Author: Abhiram Chidaraboyina <abhiram2820049@gmail.com>
Date:   Wed Oct 22 21:46:52 2025 +0530

    Update api.js

[33mcommit 2037c495c2c84fd91d16c853f62bc6f971490fe6[m
Author: Abhiram <abhiram092004@gmail.com>
Date:   Wed Oct 22 21:43:49 2025 +0530

    udpade API APP URL

[33mcommit f33e7f79a4d310ceee4e3b1a97d54c342a9c2b9c[m
Author: Abhiram <abhiram092004@gmail.com>
Date:   Wed Oct 22 21:31:14 2025 +0530

    udpade API APP URL

[33mcommit 6af172686e00a7f7ed453640d908b7479b242bc1[m
Author: Abhiram <abhiram092004@gmail.com>
Date:   Wed Oct 22 20:45:23 2025 +0530

    updated few thing add new files

[33mcommit 549c8f64a1bc392eadc9f688734bbca924629f55[m
Author: Abhiram <abhiram092004@gmail.com>
Date:   Sat Oct 18 20:19:10 2025 +0530

    updated into learning Lab

[33mcommit 534e9f440c271d366e773391d843e866d3db2835[m
Author: Abhiram <abhiram092004@gmail.com>
Date:   Wed Oct 15 19:45:29 2025 +0530

    first commit
