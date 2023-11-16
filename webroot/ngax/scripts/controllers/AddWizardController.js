backupApp.controller('AddWizardController', function($scope, $location, EditUriBackendConfig, gettextCatalog, BackupList) {
    $scope.selection = {
        style: 'blank'
    };
    $scope.nextPage = function() {
        $scope.backups = BackupList.watch($scope);
        console.log($scope.backups.length)
        if ($scope.selection.style == 'blank')
        {
            if($scope.backups.length === 0)
                $location.path('/add');
            else if($scope.backups.length === 1)
            {
                EditUriBackendConfig.show_error_dialog(gettextCatalog.getString('Maximum number of Backups reached. You can edit or delete your Backup by clicking the down arrow at the home page'))
                $location.path('/');
            }
        }
        else
            $location.path('/import');
    };
});
