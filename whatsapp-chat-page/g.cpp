#include <bits/stdc++.h>
using namespace std;

int get(vector<int> arr, int n, int level)
{
    int clevel = 0;
    int start = 0;
    int end = 0;

    int ans = 0;
    while (clevel <= level)
    {
        if (clevel % 2 == 0)
        {
            // cout<<"s ="<<start<<"e ="<<end<<endl;
            for (int i = start; i <= end; i++)
            {
                if (i >= 0 && i <= arr.size() - 1)
                {
                    ans += arr[i];
                }
            }
        }
        clevel++;
        start = end + 1;
        end = start + start *2 ;
    }
    return ans;
}
int main()
{
    cout << get({1, 2, 3, 4, 5, 6, 7, 8}, 8, 3);
}